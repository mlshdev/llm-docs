> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubber/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that acts as the delegate of the scrubber.

## Declaration

```swift
weak var delegate: (any NSScrubberDelegate)? { get set }
```

## See Also

### Configuring the scrubber

- [dataSource](datasource.md): The object that provides the data for the scrubber.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that acts as the delegate of the scrubber.

## Declaration

```objectivec
@property (weak, nullable) id<NSScrubberDelegate> delegate;
```

## See Also

### Configuring the scrubber

- [dataSource](datasource.md): The object that provides the data for the scrubber.
