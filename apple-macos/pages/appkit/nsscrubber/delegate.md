> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/delegate](https://developer.apple.com/documentation/appkit/nsscrubber/delegate)

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
