> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/iksaveoptions/init(imageproperties:imageuttype:)](https://developer.apple.com/documentation/quartz/iksaveoptions/init(imageproperties:imageuttype:))

# init(imageProperties:imageUTType:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a save options accessory pane for the provided image properties and uniform type identifier.

## Declaration

```swift
init!(imageProperties: [AnyHashable : Any]!, imageUTType: String!)
```

## Parameters

- `imageProperties`: A dictionary of image properties.
- `imageUTType`: A string that specifies a uniform type identifier, such as  `JPEG`. See [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

<a id="return-value"></a>

## Return Value

The initialized object.

## See Also

### Creating A Save Options Accessory View

- [addAccessoryView(to:)](addaccessoryview%28to_%29.md): Adds `IKSaveOptions` accessory view to a `NSSavePanel`.

# initWithImageProperties:imageUTType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a save options accessory pane for the provided image properties and uniform type identifier.

## Declaration

```objectivec
- (instancetype) initWithImageProperties:(NSDictionary *) imageProperties imageUTType:(NSString *) imageUTType;
```

## Parameters

- `imageProperties`: A dictionary of image properties.
- `imageUTType`: A string that specifies a uniform type identifier, such as  `JPEG`. See [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

<a id="return-value"></a>

## Return Value

The initialized object.

## See Also

### Creating A Save Options Accessory View

- [addSaveOptionsAccessoryViewToSavePanel:](addaccessoryview%28to_%29.md): Adds `IKSaveOptions` accessory view to a `NSSavePanel`.
