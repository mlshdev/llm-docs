> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/identifier-swift.property](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/identifier-swift.property)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.

## Declaration

```swift
var identifier: NSStoryboardSegue.Identifier? { get }
```

<a id="Discussion"></a>

## Discussion

You use this property if you override the [prepare(for:sender:)](../nssegueperforming/prepare%28for_sender_%29.md) method of the [NSSeguePerforming](../nssegueperforming.md) protocol.

## See Also

### Inspecting a Storyboard Segue

- [sourceController](sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [destinationController](destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [NSStoryboardSegue.Identifier](identifier-swift.typealias.md)

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSStoryboardSegueIdentifier identifier;
```

<a id="Discussion"></a>

## Discussion

You use this property if you override the [prepareForSegue:sender:](../nssegueperforming/prepare%28for_sender_%29.md) method of the [NSSeguePerforming](../nssegueperforming.md) protocol.

## See Also

### Inspecting a Storyboard Segue

- [sourceController](sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [destinationController](destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [NSStoryboardSegueIdentifier](identifier-swift.typealias.md)
