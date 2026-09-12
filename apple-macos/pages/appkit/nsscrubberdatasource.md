> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdatasource](https://developer.apple.com/documentation/appkit/nsscrubberdatasource)

# NSScrubberDataSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a scrubber data source object implements to provide items to the scrubber from an associated data collection in your app.

## Declaration

```swift
protocol NSScrubberDataSource : NSObjectProtocol
```

## Topics

### Getting the scrubber metrics

- [numberOfItems(for:)](nsscrubberdatasource/numberofitems%28for_%29.md): Asks the data source for the number of items in the scrubber.

### Getting views for items

- [scrubber(\_:viewForItemAt:)](nsscrubberdatasource/scrubber%28__viewforitemat_%29.md): Asks the data source object for the view the corresponds to the specified item in the scrubber.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Scrubbers

- [NSScrubber](nsscrubber.md): A customizable item picker control for the Touch Bar.
- [NSScrubberDelegate](nsscrubberdelegate.md): A set of methods that a scrubber delegate implements to respond to user interactions.

# NSScrubberDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a scrubber data source object implements to provide items to the scrubber from an associated data collection in your app.

## Declaration

```objectivec
@protocol NSScrubberDataSource <NSObject>
```

## Topics

### Getting the scrubber metrics

- [numberOfItemsForScrubber:](nsscrubberdatasource/numberofitems%28for_%29.md): Asks the data source for the number of items in the scrubber.

### Getting views for items

- [scrubber:viewForItemAtIndex:](nsscrubberdatasource/scrubber%28__viewforitemat_%29.md): Asks the data source object for the view the corresponds to the specified item in the scrubber.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Scrubbers

- [NSScrubber](nsscrubber.md): A customizable item picker control for the Touch Bar.
- [NSScrubberDelegate](nsscrubberdelegate.md): A set of methods that a scrubber delegate implements to respond to user interactions.
