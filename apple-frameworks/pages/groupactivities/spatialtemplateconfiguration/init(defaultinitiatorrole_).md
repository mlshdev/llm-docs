> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateconfiguration/init(defaultinitiatorrole:)](https://developer.apple.com/documentation/groupactivities/spatialtemplateconfiguration/init(defaultinitiatorrole:))

# init(defaultInitiatorRole:)

**Framework:** Group Activities  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates the configuration structure for a spatial template.

## Declaration

```swift
init(defaultInitiatorRole: (any SpatialTemplateRole)? = nil)
```

## Parameters

- `defaultInitiatorRole`: The template-specific role to apply to the person who initiates the activity. The specified role must be present in the template. Specify `nil` if you don’t want to assign a specific role to the initiator of the activity.

<a id="return-value"></a>

## Return Value

An initialized configuration object.
