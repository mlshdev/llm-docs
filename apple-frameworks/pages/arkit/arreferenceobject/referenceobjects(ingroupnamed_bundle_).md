> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/referenceobjects(ingroupnamed:bundle:)](https://developer.apple.com/documentation/arkit/arreferenceobject/referenceobjects(ingroupnamed:bundle:))

# referenceObjects(inGroupNamed:bundle:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.

> Only supported for legacy reference objects.

## Declaration

```swift
class func referenceObjects(inGroupNamed name: String, bundle: Bundle?) -> Set<ARReferenceObject>?
```

## Parameters

- `name`: The name of an AR Resource Group from your Xcode project’s main asset catalog.
- `bundle`: The bundle from which to load asset catalog resources, or `nil` to use your app’s main bundle.

<a id="return-value"></a>

## Return Value

A set of all unique reference objects in the specified group.

<a id="Discussion"></a>

## Discussion

To use the objects for detection in a world-tracking AR session, provide this set for your session configuration’s [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) property.

## See Also

### Loading Reference Objects

- [init(archiveURL:)](init%28archiveurl_%29.md): Loads a reference object from the specified file URL.

# referenceObjectsInGroupNamed:bundle: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.

> Only supported for legacy reference objects.

## Declaration

```objectivec
+ (NSSet<ARReferenceObject *> *) referenceObjectsInGroupNamed:(NSString *) name bundle:(NSBundle *) bundle;
```

## Parameters

- `name`: The name of an AR Resource Group from your Xcode project’s main asset catalog.
- `bundle`: The bundle from which to load asset catalog resources, or `nil` to use your app’s main bundle.

<a id="return-value"></a>

## Return Value

A set of all unique reference objects in the specified group.

<a id="Discussion"></a>

## Discussion

To use the objects for detection in a world-tracking AR session, provide this set for your session configuration’s [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) property.

## See Also

### Loading Reference Objects

- [initWithArchiveURL:error:](init%28archiveurl_%29.md): Loads a reference object from the specified file URL.
