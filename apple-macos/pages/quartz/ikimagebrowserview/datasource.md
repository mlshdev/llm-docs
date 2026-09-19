> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikimagebrowserview/datasource

# dataSource (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns the data source of the receiver.

## Declaration

```swift
@IBOutlet unowned(unsafe) var dataSource: AnyObject! { get set }
```

<a id="return-value"></a>

## Return Value

The data source (`IKImageBrowserDataSource`). The data source is not retained by the receiver.

# dataSource (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns the data source of the receiver.

## Declaration

```objectivec
@property (assign) id dataSource;
```

<a id="return-value"></a>

## Return Value

The data source (`IKImageBrowserDataSource`). The data source is not retained by the receiver.
