> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundliveviewable/1978828-playgroundliveviewrepresentation](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewable/1978828-playgroundliveviewrepresentation)

# playgroundLiveViewRepresentation

**Framework:** Playground Support  
**Kind:** Instance Property  
**Availability:** macOS 11.0+ · Xcode 10.2+ · Swift Playgrounds 2.0+

The view or view controller used to render and manage the live view.

## Declaration

```swift
var playgroundLiveViewRepresentation: PlaygroundLiveViewRepresentation { get }
```

<a id="return_value"></a>

## Return Value

A view or view controller able to render and manage the live view. View controllers are preferred.

> **Important**

> The view or view controller returned by this method must be the root of the hierarchy. Views can't have superviews or associated view controllers, and view controllers can't have parent view controllers.

<a id="discussion"></a>

## Discussion

The value returned by [playgroundLiveViewRepresentation](1978828-playgroundliveviewrepresentation.md) can be different each time the property is accessed.
