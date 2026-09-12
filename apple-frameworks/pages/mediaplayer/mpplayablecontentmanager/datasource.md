> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanager/datasource](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager/datasource)

# dataSource (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The data source provided by the app.

> Use CarPlay framework

## Declaration

```swift
weak var dataSource: (any MPPlayableContentDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

This property ensures support for random access of media items through the [MPPlayableContentDataSource](../mpplayablecontentdatasource.md) protocol, whose methods are callable at any point during the app’s lifetime. Set this property as soon as the data is available.

## See Also

### Providing playable content

- [MPPlayableContentDataSource](../mpplayablecontentdatasource.md): Deprecated. The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.

# dataSource (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The data source provided by the app.

> Use CarPlay framework

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MPPlayableContentDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

This property ensures support for random access of media items through the [MPPlayableContentDataSource](../mpplayablecontentdatasource.md) protocol, whose methods are callable at any point during the app’s lifetime. Set this property as soon as the data is available.

## See Also

### Providing playable content

- [MPPlayableContentDataSource](../mpplayablecontentdatasource.md): Deprecated. The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.
