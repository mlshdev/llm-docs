> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/richtextsource](https://developer.apple.com/documentation/foundation/nsapplescript/richtextsource)

# richTextSource (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Returns the syntax-highlighted source code of the receiver if the receiver has been compiled and its source code is available.

## Declaration

```swift
var richTextSource: NSAttributedString? { get }
```

<a id="Discussion"></a>

## Discussion

Returns `nil` otherwise. It is possible for an instance of `NSAppleScript` that has been instantiated with [init(contentsOf:error:)](init%28contentsof_error_%29.md) to be a script for which the source code is not available, but is nonetheless executable.

# richTextSource (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Returns the syntax-highlighted source code of the receiver if the receiver has been compiled and its source code is available.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSAttributedString * richTextSource;
```

<a id="Discussion"></a>

## Discussion

Returns `nil` otherwise. It is possible for an instance of `NSAppleScript` that has been instantiated with [initWithContentsOfURL:error:](init%28contentsof_error_%29.md) to be a script for which the source code is not available, but is nonetheless executable.
