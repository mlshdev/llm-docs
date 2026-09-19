> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikimageeditpanel/datasource

# dataSource (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Specifies the edit panel’s dataSource.

## Declaration

```swift
unowned(unsafe) var dataSource: (any IKImageEditPanelDataSource)! { get set }
```

## See Also

### Getting, Setting, and Reloading Data

- [reloadData()](reloaddata%28%29.md): Reloads the data from the data associated with an image editing panel.

# dataSource (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Specifies the edit panel’s dataSource.

## Declaration

```objectivec
@property (assign) id<IKImageEditPanelDataSource> dataSource;
```

## See Also

### Getting, Setting, and Reloading Data

- [reloadData](reloaddata%28%29.md): Reloads the data from the data associated with an image editing panel.
