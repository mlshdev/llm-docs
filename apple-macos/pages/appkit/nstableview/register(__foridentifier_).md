> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/register(_:foridentifier:)](https://developer.apple.com/documentation/appkit/nstableview/register(_:foridentifier:))

# register(\_:forIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.

## Declaration

```swift
func register(_ nib: NSNib?, forIdentifier identifier: NSUserInterfaceItemIdentifier)
```

## Parameters

- `nib`: The nib containing the view.
- `identifier`: The identifier of the view to create.

<a id="Discussion"></a>

## Discussion

Use this method to associate one of the NIB’s cell views with `identifier` so that the table can instantiate this view when requested. This method is used when [makeView(withIdentifier:owner:)](makeview%28withidentifier_owner_%29.md) is called, and there was no NIB created at design time for the specified identifier. This allows dynamic loading of NIBs that can be associated with the table.

Because a NIB can contain multiple views, you can associate the same NIB with multiple identifiers. To remove a previously associated NIB for `identifier`, pass in `nil` for the `nib` value.

> **Note**

>  This method applies only to [NSView](../nsview.md)-based table views.

## See Also

### NSView-Based Table Nib File Registration

- [registeredNibsByIdentifier](registerednibsbyidentifier.md): The dictionary of all registered nib files for view-based table view identifiers.

# registerNib:forIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.

## Declaration

```objectivec
- (void) registerNib:(NSNib *) nib forIdentifier:(NSUserInterfaceItemIdentifier) identifier;
```

## Parameters

- `nib`: The nib containing the view.
- `identifier`: The identifier of the view to create.

<a id="Discussion"></a>

## Discussion

Use this method to associate one of the NIB’s cell views with `identifier` so that the table can instantiate this view when requested. This method is used when [makeViewWithIdentifier:owner:](makeview%28withidentifier_owner_%29.md) is called, and there was no NIB created at design time for the specified identifier. This allows dynamic loading of NIBs that can be associated with the table.

Because a NIB can contain multiple views, you can associate the same NIB with multiple identifiers. To remove a previously associated NIB for `identifier`, pass in `nil` for the `nib` value.

> **Note**

>  This method applies only to [NSView](../nsview.md)-based table views.

## See Also

### NSView-Based Table Nib File Registration

- [registeredNibsByIdentifier](registerednibsbyidentifier.md): The dictionary of all registered nib files for view-based table view identifiers.
