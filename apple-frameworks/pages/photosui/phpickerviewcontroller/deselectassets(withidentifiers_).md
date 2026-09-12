> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerviewcontroller/deselectassets(withidentifiers:)](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/deselectassets(withidentifiers:))

# deselectAssets(withIdentifiers:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Deselects assets that are in a selected state.

## Declaration

```swift
func deselectAssets(withIdentifiers identifiers: [String])
```

## Parameters

- `identifiers`: The list of identifiers to deselect.

<a id="Discussion"></a>

## Discussion

This method ignores assets that are invalid or aren’t in a selected state, and if you don’t specify a library when calling [init(photoLibrary:)](../phpickerconfiguration-swift.struct/init%28photolibrary_%29.md).

# deselectAssetsWithIdentifiers: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Deselects assets that are in a selected state.

## Declaration

```objectivec
- (void) deselectAssetsWithIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `identifiers`: The list of identifiers to deselect.

<a id="Discussion"></a>

## Discussion

This method ignores assets that are invalid or aren’t in a selected state, and if you don’t specify a library when calling [init(photoLibrary:)](../phpickerconfiguration-swift.struct/init%28photolibrary_%29.md).
