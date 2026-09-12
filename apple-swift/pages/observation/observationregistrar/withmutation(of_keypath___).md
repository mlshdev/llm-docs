> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observationregistrar/withmutation(of:keypath:_:)](https://developer.apple.com/documentation/observation/observationregistrar/withmutation(of:keypath:_:))

# withMutation(of:keyPath:\_:)

**Framework:** Observation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Identifies mutations to the transactions registered for observers.

## Declaration

```swift
func withMutation<Subject, Member, T>(of subject: Subject, keyPath: KeyPath<Subject, Member>, _ mutation: () throws -> T) rethrows -> T where Subject : Observable
```

## Parameters

- `subject`: An instance of an observable type.
- `keyPath`: The key path of an observed property.

<a id="discussion"></a>

## Discussion

This method calls [willSet(\_:keyPath:)](willset%28__keypath_%29.md) before the mutation. Then it calls [didSet(\_:keyPath:)](didset%28__keypath_%29.md) after the mutation.

## See Also

### Identifying transactional access

- [access(\_:keyPath:)](access%28__keypath_%29.md): Registers access to a specific property for observation.
