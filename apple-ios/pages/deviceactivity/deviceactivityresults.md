> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityresults](https://developer.apple.com/documentation/deviceactivity/deviceactivityresults)

# DeviceActivityResults

**Framework:** DeviceActivity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An asynchronous sequence of filtered device activity results.

## Declaration

```swift
struct DeviceActivityResults<Element>
```

## Topics

### Classes

- [DeviceActivityResults.Iterator](deviceactivityresults/iterator.md): An asynchronous iterator for filtered device activity.

### Instance Methods

- [makeAsyncIterator()](deviceactivityresults/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Filter activity data

- [DeviceActivityFilter](deviceactivityfilter.md): A type that filters the device activity data to include in a report.
- [DeviceActivityData](deviceactivitydata.md): Activity data for a person on a specific device.
