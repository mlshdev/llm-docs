> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/storyboard](https://developer.apple.com/documentation/appkit/nsviewcontroller/storyboard)

# storyboard (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The storyboard from which the view controller was loaded.

## Declaration

```swift
var storyboard: NSStoryboard? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller was not loaded from a storyboard, the value of this property is `nil`.

## See Also

### Using a Storyboard

- [dismiss(\_:)](dismiss%28__%29-3n76y.md)

# storyboard (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The storyboard from which the view controller was loaded.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSStoryboard * storyboard;
```

<a id="Discussion"></a>

## Discussion

If the view controller was not loaded from a storyboard, the value of this property is `nil`.

## See Also

### Using a Storyboard

- [dismissController:](dismiss%28__%29-3n76y.md)
