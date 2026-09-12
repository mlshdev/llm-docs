> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplayobserver/displaydidendreconfiguration(_:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplayobserver/displaydidendreconfiguration(_:))

# displayDidEndReconfiguration(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the framework calls when the reconfiguration operation ends.

## Declaration

```swift
optional func displayDidEndReconfiguration(_ display: VZGraphicsDisplay)
```

## Parameters

- `display`: The [VZGraphicsDisplay](../vzgraphicsdisplay.md) whose state is changing.

<a id="Discussion"></a>

## Discussion

Frame updates have arrived at the most recently requested display size and configuration.

The framework invokes this method on the VM’s queue.

## See Also

### Reacting to changes in display configuration

- [displayDidBeginReconfiguration(\_:)](displaydidbeginreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation has begun.

# displayDidEndReconfiguration: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

The method the framework calls when the reconfiguration operation ends.

## Declaration

```objectivec
- (void) displayDidEndReconfiguration:(VZGraphicsDisplay *) display;
```

## Parameters

- `display`: The [VZGraphicsDisplay](../vzgraphicsdisplay.md) whose state is changing.

<a id="Discussion"></a>

## Discussion

Frame updates have arrived at the most recently requested display size and configuration.

The framework invokes this method on the VM’s queue.

## See Also

### Reacting to changes in display configuration

- [displayDidBeginReconfiguration:](displaydidbeginreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation has begun.
