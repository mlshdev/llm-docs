> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteractiondelegate/findinteraction(_:sessionfor:)](https://developer.apple.com/documentation/uikit/uifindinteractiondelegate/findinteraction(_:sessionfor:))

# findInteraction(\_:sessionFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the object for managing the state, presentation, and behavior of the search.

## Declaration

```swift
func findInteraction(_ interaction: UIFindInteraction, sessionFor view: UIView) -> UIFindSession?
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `view`: The view you provide a find session object for.

<a id="return-value"></a>

## Return Value

Returns an object the find interaction uses to manage the state, presentation, and behavior of the search. To prevent the find panel from appearing, return `nil`.

<a id="Discussion"></a>

## Discussion

Implement the [UITextSearching](../uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](../uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](../uifindsession.md) to manage the details of the session using a custom class.

# findInteraction:sessionForView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Provides the object for managing the state, presentation, and behavior of the search.

## Declaration

```objectivec
- (UIFindSession *) findInteraction:(UIFindInteraction *) interaction sessionForView:(UIView *) view;
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `view`: The view you provide a find session object for.

<a id="return-value"></a>

## Return Value

Returns an object the find interaction uses to manage the state, presentation, and behavior of the search. To prevent the find panel from appearing, return `nil`.

<a id="Discussion"></a>

## Discussion

Implement the [UITextSearching](../uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](../uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](../uifindsession.md) to manage the details of the session using a custom class.
