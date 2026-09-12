> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observationregistrar/access(_:keypath:)](https://developer.apple.com/documentation/observation/observationregistrar/access(_:keypath:))

# access(\_:keyPath:)

**Framework:** Observation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Registers access to a specific property for observation.

## Declaration

```swift
func access<Subject, Member>(_ subject: Subject, keyPath: KeyPath<Subject, Member>) where Subject : Observable
```

## Parameters

- `subject`: An instance of an observable type.
- `keyPath`: The key path of an observed property.

## See Also

### Identifying transactional access

- [withMutation(of:keyPath:\_:)](withmutation%28of_keypath___%29.md): Identifies mutations to the transactions registered for observers.
