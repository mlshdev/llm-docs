> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/init(identifier:display:)](https://developer.apple.com/documentation/intents/inobject/init(identifier:display:))

# init(identifier:display:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom intent object with the specified identifier and display string.

## Declaration

```swift
convenience init(identifier: String?, display displayString: String)
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that Siri displays that describes the parameter or property.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [init(identifier:display:subtitle:image:)](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [init(identifier:display:pronunciationHint:subtitle:image:)](init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.
- [init(identifier:display:pronunciationHint:)](init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.

# initWithIdentifier:displayString: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom intent object with the specified identifier and display string.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayString:(NSString *) displayString;
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that Siri displays that describes the parameter or property.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [initWithIdentifier:displayString:subtitleString:displayImage:](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [initWithIdentifier:displayString:pronunciationHint:subtitleString:displayImage:](init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.
- [initWithIdentifier:displayString:pronunciationHint:](init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.
