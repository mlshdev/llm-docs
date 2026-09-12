> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/referenceimages(ingroupnamed:bundle:)](https://developer.apple.com/documentation/arkit/arreferenceimage/referenceimages(ingroupnamed:bundle:))

# referenceImages(inGroupNamed:bundle:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Loads all reference images in the specified AR Resource Group in your Xcode project’s asset catalog.

## Declaration

```swift
class func referenceImages(inGroupNamed name: String, bundle: Bundle?) -> Set<ARReferenceImage>?
```

## Parameters

- `name`: The name of an AR Resource Group from your Xcode project’s main asset catalog.
- `bundle`: The bundle from which to load asset catalog resources, or `nil` to use your app’s main bundle.

<a id="return-value"></a>

## Return Value

A set of all unique reference images in the specified group.

<a id="Discussion"></a>

## Discussion

To use the images for image detection in a world-tracking AR session, provide this set for your session configuration’s [detectionImages](../arworldtrackingconfiguration/detectionimages.md) property.

# referenceImagesInGroupNamed:bundle: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Loads all reference images in the specified AR Resource Group in your Xcode project’s asset catalog.

## Declaration

```objectivec
+ (NSSet<ARReferenceImage *> *) referenceImagesInGroupNamed:(NSString *) name bundle:(NSBundle *) bundle;
```

## Parameters

- `name`: The name of an AR Resource Group from your Xcode project’s main asset catalog.
- `bundle`: The bundle from which to load asset catalog resources, or `nil` to use your app’s main bundle.

<a id="return-value"></a>

## Return Value

A set of all unique reference images in the specified group.

<a id="Discussion"></a>

## Discussion

To use the images for image detection in a world-tracking AR session, provide this set for your session configuration’s [detectionImages](../arworldtrackingconfiguration/detectionimages.md) property.
