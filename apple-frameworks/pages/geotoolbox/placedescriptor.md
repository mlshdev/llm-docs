> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor](https://developer.apple.com/documentation/geotoolbox/placedescriptor)

# PlaceDescriptor

**Framework:** GeoToolbox  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure that contains identifying information about a place that a mapping service may use to attempt to find rich place information such as phone numbers, websites, and so on.

## Declaration

```swift
struct PlaceDescriptor
```

<a id="Discussion"></a>

## Discussion

A [PlaceDescriptor](placedescriptor.md) allows you to construct a collection of metadata about a place, including at least one [PlaceDescriptor.PlaceRepresentation](placedescriptor/placerepresentation.md) which contains common geographic concepts like an address or coordinate. `PlaceDescriptor` may optionally include a [supportingRepresentations](placedescriptor/supportingrepresentations.md) which contains identifiers that match the place for mapping service providers. Use `PlaceDescriptor` in conjunction with a mapping service to request rich information about a place.

For example to create a [PlaceDescriptor](placedescriptor.md) that describes an address with a common name use [init(representations:commonName:supportingRepresentations:)](placedescriptor/init%28representations_commonname_supportingrepresentations_%29.md) as shown here.

```swift
    let fountain = PlaceDescriptor(
        representations: [.address("121-122 James's St \n Dublin 8 \n D08 ET27 \n Ireland")],
        commonName: "Obelisk Fountain"
    )
```

You can also initialize a `PlaceDescriptor` using an [MKMapItem](../mapkit/mkmapitem.md) as shown below.

```swift
    guard let descriptor = PlaceDescriptor(item: myMapItem) else {
        return
    }
```

## Topics

### Creating place descriptors

- [init(representations:commonName:supportingRepresentations:)](placedescriptor/init%28representations_commonname_supportingrepresentations_%29.md): Creates a place descriptor, suitable for use when searching or retrieving rich data about a place.
- [init(item:)](placedescriptor/init%28item_%29.md): Creates a place descriptor from a map item.

### Getting the attributes of a place descriptor

- [commonName](placedescriptor/commonname.md): Publicly known name of the area or place of interest.
- [address](placedescriptor/address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](placedescriptor/coordinate.md): The latitude and longitude for a place.
- [representations](placedescriptor/representations.md): An array of representations of the place using common mapping concepts.
- [supportingRepresentations](placedescriptor/supportingrepresentations.md): An array of proprietary or non-uniform representations of the place, such as representations you can use with other mapping services.
- [serviceIdentifier(for:)](placedescriptor/serviceidentifier%28for_%29.md): Retrieves the identifier for the specified service provider, if available.

### Enumeration values that describe places and mapping service representations

- [PlaceDescriptor.PlaceRepresentation](placedescriptor/placerepresentation.md): Values that represent a physical place, suitable for use when searching or retrieving rich data.
- [PlaceDescriptor.SupportingPlaceRepresentation](placedescriptor/supportingplacerepresentation.md): Values that describe the representation of a physical place using proprietary attributes, such as an alphanumeric location identifier from a mapping service provider.

### Type Aliases

- [PlaceDescriptor.Specification](placedescriptor/specification.md)
- [PlaceDescriptor.UnwrappedType](placedescriptor/unwrappedtype.md)
- [PlaceDescriptor.ValueType](placedescriptor/valuetype.md)

### Type Properties

- [defaultResolverSpecification](placedescriptor/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [PersistentlyIdentifiable](../appintents/persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)
