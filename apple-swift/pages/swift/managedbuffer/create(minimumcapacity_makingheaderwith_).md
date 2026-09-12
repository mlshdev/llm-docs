> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbuffer/create(minimumcapacity:makingheaderwith:)](https://developer.apple.com/documentation/swift/managedbuffer/create(minimumcapacity:makingheaderwith:))

# create(minimumCapacity:makingHeaderWith:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Create a new instance of the most-derived class, calling `factory` on the partially-constructed object to generate an initial `Header`.

## Declaration

```swift
final class func create(minimumCapacity: Int, makingHeaderWith factory: (ManagedBuffer<Header, Element>) throws -> Header) rethrows -> ManagedBuffer<Header, Element>
```
