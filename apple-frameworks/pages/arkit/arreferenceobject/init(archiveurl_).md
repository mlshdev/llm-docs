> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/init(archiveurl:)](https://developer.apple.com/documentation/arkit/arreferenceobject/init(archiveurl:))

# init(archiveURL:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Loads a reference object from the specified file URL.

## Declaration

```swift
init(archiveURL url: URL) throws
```

## Parameters

- `url`: The local file URL containing the reference object to load.

<a id="return-value"></a>

## Return Value

The reference object contained in the file.

<a id="Discussion"></a>

## Discussion

To use the object for detection in a world-tracking AR session, add it to the [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) set in your session configuration.

## See Also

### Loading Reference Objects

- [referenceObjects(inGroupNamed:bundle:)](referenceobjects%28ingroupnamed_bundle_%29.md): Deprecated. Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.

# initWithArchiveURL:error: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Loads a reference object from the specified file URL.

## Declaration

```objectivec
- (instancetype) initWithArchiveURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The local file URL containing the reference object to load.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object. If this method returns `nil`, check this pointer for an error describing the failure.

<a id="return-value"></a>

## Return Value

The reference object contained in the file. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

To use the object for detection in a world-tracking AR session, add it to the [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) set in your session configuration.

## See Also

### Loading Reference Objects

- [referenceObjectsInGroupNamed:bundle:](referenceobjects%28ingroupnamed_bundle_%29.md): Deprecated. Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.
