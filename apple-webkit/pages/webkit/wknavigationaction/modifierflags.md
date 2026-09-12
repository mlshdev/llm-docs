> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/modifierflags](https://developer.apple.com/documentation/webkit/wknavigationaction/modifierflags)

# modifierFlags (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.10+ · visionOS 2.4+

The modifier keys that were pressed at the time of the navigation request.

## Declaration

```swift
var modifierFlags: UIKeyModifierFlags { get }
```

```swift
var modifierFlags: NSEvent.ModifierFlags { get }
```

## See Also

### Inspecting user actions

- [buttonNumber](buttonnumber.md): The number of the mouse button that caused the navigation request.

# modifierFlags (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.10+ · visionOS 2.4+

The modifier keys that were pressed at the time of the navigation request.

## Declaration

```objectivec
@property (nonatomic, readonly) UIKeyModifierFlags modifierFlags;
```

```objectivec
@property (nonatomic, readonly) NSEventModifierFlags modifierFlags;
```

## See Also

### Inspecting user actions

- [buttonNumber](buttonnumber.md): The number of the mouse button that caused the navigation request.
