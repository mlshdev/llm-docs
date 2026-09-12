> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawable/presentedtime](https://developer.apple.com/documentation/metal/mtldrawable/presentedtime)

# presentedTime (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the drawable was displayed onscreen.

## Declaration

```swift
var presentedTime: CFTimeInterval { get }
```

<a id="discussion"></a>

## Discussion

Typically, you query this property in a callback method. See [addPresentedHandler(\_:)](addpresentedhandler%28__%29.md).

The property value is `0.0` if the drawable hasn’t been presented or if its associated frame was dropped.

## See Also

### Getting presentation information

- [addPresentedHandler(\_:)](addpresentedhandler%28__%29.md): Registers a block of code to be called immediately after the drawable is presented.

# presentedTime (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

The host time, in seconds, when the drawable was displayed onscreen.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval presentedTime;
```

<a id="discussion"></a>

## Discussion

Typically, you query this property in a callback method. See [addPresentedHandler:](addpresentedhandler%28__%29.md).

The property value is `0.0` if the drawable hasn’t been presented or if its associated frame was dropped.

## See Also

### Getting presentation information

- [addPresentedHandler:](addpresentedhandler%28__%29.md): Registers a block of code to be called immediately after the drawable is presented.
