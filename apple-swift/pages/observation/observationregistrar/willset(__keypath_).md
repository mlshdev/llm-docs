> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observationregistrar/willset(_:keypath:)](https://developer.apple.com/documentation/observation/observationregistrar/willset(_:keypath:))

# willSet(\_:keyPath:)

**Framework:** Observation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A property observation called before setting the value of the subject.

## Declaration

```swift
func willSet<Subject, Member>(_ subject: Subject, keyPath: KeyPath<Subject, Member>) where Subject : Observable
```

## Parameters

- `subject`: An instance of an observable type.
- `keyPath`: The key path of an observed property.

## See Also

### Receiving change notifications

- [didSet(\_:keyPath:)](didset%28__keypath_%29.md): A property observation called after setting the value of the subject.
