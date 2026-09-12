> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrefreshcontroller/beginrefreshing()](https://developer.apple.com/documentation/appkit/nsrefreshcontroller/beginrefreshing())

# beginRefreshing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the refresh controller that a refresh operation has begun.

## Declaration

```swift
func beginRefreshing()
```

<a id="discussion"></a>

## Discussion

Call this method to programmatically start a refresh operation. The refresh controller enters the refreshing state and displays its activity indicator. This is typically used when you want to show a refresh initiated by something other than user interaction.

# beginRefreshing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the refresh controller that a refresh operation has begun.

## Declaration

```objectivec
- (void) beginRefreshing;
```

<a id="discussion"></a>

## Discussion

Call this method to programmatically start a refresh operation. The refresh controller enters the refreshing state and displays its activity indicator. This is typically used when you want to show a refresh initiated by something other than user interaction.
