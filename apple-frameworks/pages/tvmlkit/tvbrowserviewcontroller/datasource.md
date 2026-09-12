> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontroller/datasource](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontroller/datasource)

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
