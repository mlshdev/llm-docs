> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplayobserver/displaydidbeginreconfiguration(_:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplayobserver/displaydidbeginreconfiguration(_:))

# displayDidBeginReconfiguration(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the framework calls when the reconfiguration operation has begun.

## Declaration

```swift
optional func displayDidBeginReconfiguration(_ display: VZGraphicsDisplay)
```

## Parameters

- `display`: The [VZGraphicsDisplay](../vzgraphicsdisplay.md) whose state is changing.

<a id="Discussion"></a>

## Discussion

The framework issued a configuration change, such as a resize, and you can expect new frames with a new size or configuration.

The framework invokes this method on the VM’s queue.

## See Also

### Reacting to changes in display configuration

- [displayDidEndReconfiguration(\_:)](displaydidendreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation ends.

# displayDidBeginReconfiguration: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the framework calls when the reconfiguration operation has begun.

## Declaration

```objectivec
- (void) displayDidBeginReconfiguration:(VZGraphicsDisplay *) display;
```

## Parameters

- `display`: The [VZGraphicsDisplay](../vzgraphicsdisplay.md) whose state is changing.

<a id="Discussion"></a>

## Discussion

The framework issued a configuration change, such as a resize, and you can expect new frames with a new size or configuration.

The framework invokes this method on the VM’s queue.

## See Also

### Reacting to changes in display configuration

- [displayDidEndReconfiguration:](displaydidendreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation ends.
