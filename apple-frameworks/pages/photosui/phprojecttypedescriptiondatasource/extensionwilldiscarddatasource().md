> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttypedescriptiondatasource/extensionwilldiscarddatasource()](https://developer.apple.com/documentation/photosui/phprojecttypedescriptiondatasource/extensionwilldiscarddatasource())

# extensionWillDiscardDataSource() (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides an opportunity to use the data source before it’s released.

## Declaration

```swift
optional func extensionWillDiscardDataSource()
```

<a id="Discussion"></a>

## Discussion

After this call, the extension context no longer strongly references the data source. Fetch any last data you need here before the data source goes out of scope.

# extensionWillDiscardDataSource (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Provides an opportunity to use the data source before it’s released.

## Declaration

```objectivec
- (void) extensionWillDiscardDataSource;
```

<a id="Discussion"></a>

## Discussion

After this call, the extension context no longer strongly references the data source. Fetch any last data you need here before the data source goes out of scope.
