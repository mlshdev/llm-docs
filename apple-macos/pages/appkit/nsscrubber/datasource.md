> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubber/datasource

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that provides the data for the scrubber.

## Declaration

```swift
weak var dataSource: (any NSScrubberDataSource)? { get set }
```

## See Also

### Configuring the scrubber

- [delegate](delegate.md): The object that acts as the delegate of the scrubber.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that provides the data for the scrubber.

## Declaration

```objectivec
@property (weak, nullable) id<NSScrubberDataSource> dataSource;
```

## See Also

### Configuring the scrubber

- [delegate](delegate.md): The object that acts as the delegate of the scrubber.
