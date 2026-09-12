> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction/activefindsession](https://developer.apple.com/documentation/uikit/uifindinteraction/activefindsession)

# activeFindSession (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The object that manages the state, presentation, and behavior of an active search.

## Declaration

```swift
var activeFindSession: UIFindSession? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the session object managing the details of the search. When no seach is active, [isFindNavigatorVisible](isfindnavigatorvisible.md) is `false`, this returns `nil`.

## See Also

### Managing the search

- [updateResultCount()](updateresultcount%28%29.md): Updates the results the interface displays for the active search.

# activeFindSession (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The object that manages the state, presentation, and behavior of an active search.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIFindSession * activeFindSession;
```

<a id="Discussion"></a>

## Discussion

This property returns the session object managing the details of the search. When no seach is active, [findNavigatorVisible](isfindnavigatorvisible.md) is `false`, this returns `nil`.

## See Also

### Managing the search

- [updateResultCount](updateresultcount%28%29.md): Updates the results the interface displays for the active search.
