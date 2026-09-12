> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessory/behavior](https://developer.apple.com/documentation/appkit/nsslideraccessory/behavior)

# behavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The effect on interaction with the accessory.

## Declaration

```swift
@NSCopying var behavior: NSSliderAccessoryBehavior { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `automaticBehavior`.

## See Also

### Instance Properties

- [isEnabled](isenabled.md): Determines whether or not the accessory is interactive and draws with an enabled appearance. Defaults to `true`.

# behavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The effect on interaction with the accessory.

## Declaration

```objectivec
@property (copy) NSSliderAccessoryBehavior * behavior;
```

<a id="discussion"></a>

## Discussion

The default value is `automaticBehavior`.

## See Also

### Instance Properties

- [enabled](isenabled.md): Determines whether or not the accessory is interactive and draws with an enabled appearance. Defaults to `true`.
