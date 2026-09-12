> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/buttonnumber](https://developer.apple.com/documentation/webkit/wknavigationaction/buttonnumber)

# buttonNumber (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.10+ · visionOS 2.4+

The number of the mouse button that caused the navigation request.

## Declaration

```swift
var buttonNumber: UIEvent.ButtonMask { get }
```

```swift
var buttonNumber: Int { get }
```

## See Also

### Inspecting user actions

- [modifierFlags](modifierflags.md): The modifier keys that were pressed at the time of the navigation request.

# buttonNumber (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.10+ · visionOS 2.4+

The number of the mouse button that caused the navigation request.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEventButtonMask buttonNumber;
```

```objectivec
@property (nonatomic, readonly) NSInteger buttonNumber;
```

## See Also

### Inspecting user actions

- [modifierFlags](modifierflags.md): The modifier keys that were pressed at the time of the navigation request.
