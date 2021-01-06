import * as React from 'react';
import {FlatListProps, View, ScrollViewComponent} from 'react-native'


export class FlatList<ItemT = any> extends React.Component<FlatListProps<ItemT>> {
  /**
   * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
   */
  scrollToEnd: (params?: { animated?: boolean | null }) => void;

  /**
   * Scrolls to the item at the specified index such that it is positioned in the viewable area
   * such that viewPosition 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.
   * Cannot scroll to locations outside the render window without specifying the getItemLayout prop.
   */
  scrollToIndex: (params: {
    animated?: boolean | null;
    index: number;
    viewOffset?: number;
    viewPosition?: number;
  }) => void;

  /**
   * Requires linear scan through data - use `scrollToIndex` instead if possible.
   * May be janky without `getItemLayout` prop.
   */
  scrollToItem: (params: { animated?: boolean | null; item: ItemT; viewPosition?: number }) => void;

  /**
   * Scroll to a specific content pixel offset, like a normal `ScrollView`.
   */
  scrollToOffset: (params: { animated?: boolean | null; offset: number }) => void;

  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations,
   * e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
   * by taps on items or by navigation actions.
   */
  recordInteraction: () => void;

  /**
   * Displays the scroll indicators momentarily.
   */
  flashScrollIndicators: () => void;

  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder: () => JSX.Element | null | undefined;

  /**
   * Provides a reference to the underlying host component
   */
  getNativeScrollRef: () => React.RefObject<View> | React.RefObject<ScrollViewComponent> | null | undefined;

  getScrollableNode: () => any;

  // TODO: use `unknown` instead of `any` for Typescript >= 3.0
  setNativeProps: (props: { [key: string]: any }) => void;
}
