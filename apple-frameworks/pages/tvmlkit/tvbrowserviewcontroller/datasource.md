> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontroller/datasource

# dataSource (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The object that provides data to the full-screen browser.

## Declaration

```swift
weak var dataSource: (any TVBrowserViewControllerDataSource)? { get set }
```

## See Also

### Providing the Browser’s Data

- [TVBrowserViewControllerDataSource](../tvbrowserviewcontrollerdatasource.md): Methods adopted by the object you use to represent the browser view.

# dataSource (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The object that provides data to the full-screen browser.

## Declaration

```objectivec
@property (nonatomic, weak) id<TVBrowserViewControllerDataSource> dataSource;
```

## See Also

### Providing the Browser’s Data

- [TVBrowserViewControllerDataSource](../tvbrowserviewcontrollerdatasource.md): Methods adopted by the object you use to represent the browser view.
