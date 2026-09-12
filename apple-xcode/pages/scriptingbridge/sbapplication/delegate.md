> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/delegate](https://developer.apple.com/documentation/scriptingbridge/sbapplication/delegate)

# delegate (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The error-handling delegate of the receiver.

## Declaration

```swift
var delegate: (any SBApplicationDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The delegate should implement the [eventDidFail(\_:withError:)](../sbapplicationdelegate/eventdidfail%28__witherror_%29.md) method of the [SBApplicationDelegate](../sbapplicationdelegate.md) informal protocol.

# delegate (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The error-handling delegate of the receiver.

## Declaration

```objectivec
@property (strong, nullable) id<SBApplicationDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The delegate should implement the [eventDidFail:withError:](../sbapplicationdelegate/eventdidfail%28__witherror_%29.md) method of the [SBApplicationDelegate](../sbapplicationdelegate.md) informal protocol.
