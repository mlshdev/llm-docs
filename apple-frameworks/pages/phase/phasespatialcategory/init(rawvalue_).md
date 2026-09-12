> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialcategory/init(rawvalue:)](https://developer.apple.com/documentation/phase/phasespatialcategory/init(rawvalue:))

# init(rawValue:)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a spatial category with the given string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The enumeration case’s underlying string value.

<a id="Discussion"></a>

## Discussion

To initialize a spatial category:

```swift
// Set the raw-value variable to the `directPathTransmission` constant. 
var rawValue: String = PHASESpatialCategoryDirectPathTransmission
var spatialPipelineOption = PHASESpatialCategory(rawValue: rawValue)
```

To check a spatial category’s raw value, see the Objective-C declaration of the struct member.
