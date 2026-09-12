> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/go(to:)](https://developer.apple.com/documentation/webkit/wkwebview/go(to:))

# go(to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Navigates to an item from the back-forward list and sets it as the current item.

## Declaration

```swift
func go(to item: WKBackForwardListItem) -> WKNavigation?
```

## Parameters

- `item`: The item to navigate to. The item must be in the web view’s back-forward list.

<a id="return-value"></a>

## Return Value

A new navigation to the requested item, or `nil` if it is already the current item or is not part of the web view’s back-forward list.

## See Also

### Navigating between webpages

- [allowsBackForwardNavigationGestures](allowsbackforwardnavigationgestures.md): A Boolean value that indicates whether horizontal swipe gestures trigger backward and forward page navigation.
- [backForwardList](backforwardlist.md): The web view’s back-forward list.
- [goBack(\_:)](goback%28__%29.md): Navigates to the back item in the back-forward list.
- [goBack()](goback%28%29.md): Navigates to the back item in the back-forward list.
- [goForward(\_:)](goforward%28__%29.md): Navigates to the forward item in the back-forward list.
- [goForward()](goforward%28%29.md): Navigates to the forward item in the back-forward list.
- [canGoBack](cangoback.md): A Boolean value that indicates whether there is a valid back item in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean value that indicates whether there is a valid forward item in the back-forward list.
- [allowsLinkPreview](allowslinkpreview.md): A Boolean value that determines whether pressing a link displays a preview of the destination for the link.
- [interactionState](interactionstate.md): An object you use to capture the current state of interaction in a web view so that you can restore that state later to another web view.

# goToBackForwardListItem: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Navigates to an item from the back-forward list and sets it as the current item.

## Declaration

```objectivec
- (WKNavigation *) goToBackForwardListItem:(WKBackForwardListItem *) item;
```

## Parameters

- `item`: The item to navigate to. The item must be in the web view’s back-forward list.

<a id="return-value"></a>

## Return Value

A new navigation to the requested item, or `nil` if it is already the current item or is not part of the web view’s back-forward list.

## See Also

### Navigating between webpages

- [allowsBackForwardNavigationGestures](allowsbackforwardnavigationgestures.md): A Boolean value that indicates whether horizontal swipe gestures trigger backward and forward page navigation.
- [backForwardList](backforwardlist.md): The web view’s back-forward list.
- [goBack:](goback%28__%29.md): Navigates to the back item in the back-forward list.
- [goBack](goback%28%29.md): Navigates to the back item in the back-forward list.
- [goForward:](goforward%28__%29.md): Navigates to the forward item in the back-forward list.
- [goForward](goforward%28%29.md): Navigates to the forward item in the back-forward list.
- [canGoBack](cangoback.md): A Boolean value that indicates whether there is a valid back item in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean value that indicates whether there is a valid forward item in the back-forward list.
- [allowsLinkPreview](allowslinkpreview.md): A Boolean value that determines whether pressing a link displays a preview of the destination for the link.
- [interactionState](interactionstate.md): An object you use to capture the current state of interaction in a web view so that you can restore that state later to another web view.
