> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer/size](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/size)

# size (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The number of commands contained in the indirect command buffer.

## Declaration

```swift
var size: Int { get }
```

<a id="discussion"></a>

## Discussion

You set the value of this property when you create the indirect command buffer, and afterwards it doesn’t change.

# size (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The number of commands contained in the indirect command buffer.

## Declaration

```objectivec
@property (readonly) NSUInteger size;
```

<a id="discussion"></a>

## Discussion

You set the value of this property when you create the indirect command buffer, and afterwards it doesn’t change.
