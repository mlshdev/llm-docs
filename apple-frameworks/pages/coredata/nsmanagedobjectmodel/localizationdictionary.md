> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/localizationdictionary](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/localizationdictionary)

# localizationDictionary (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The localization dictionary of the model.

## Declaration

```swift
var localizationDictionary: [String : String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The following table describes the key and value pattern for the localization dictionary.

| Key | Value | Note |
| --- | --- | --- |
| “Entity/NonLocalizedEntityName” | “LocalizedEntityName” |  |
| “Property/NonLocalizedPropertyName/Entity/EntityName” | “LocalizedPropertyName” | (1) |
| “Property/NonLocalizedPropertyName” | “LocalizedPropertyName” |  |
| “ErrorString/NonLocalizedErrorString” | “LocalizedErrorString” |  |

(1) For properties in different entities with the same non-localized name but that should have different localized names.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v10.4, `localizationDictionary` may return `nil` until Core Data lazily loads the dictionary for its own purposes (for example, reporting a localized error).

# localizationDictionary (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The localization dictionary of the model.

## Declaration

```objectivec
@property (strong, nullable) NSDictionary<NSString *,NSString *> * localizationDictionary;
```

<a id="Discussion"></a>

## Discussion

The following table describes the key and value pattern for the localization dictionary.

| Key | Value | Note |
| --- | --- | --- |
| “Entity/NonLocalizedEntityName” | “LocalizedEntityName” |  |
| “Property/NonLocalizedPropertyName/Entity/EntityName” | “LocalizedPropertyName” | (1) |
| “Property/NonLocalizedPropertyName” | “LocalizedPropertyName” |  |
| “ErrorString/NonLocalizedErrorString” | “LocalizedErrorString” |  |

(1) For properties in different entities with the same non-localized name but that should have different localized names.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v10.4, `localizationDictionary` may return `nil` until Core Data lazily loads the dictionary for its own purposes (for example, reporting a localized error).
