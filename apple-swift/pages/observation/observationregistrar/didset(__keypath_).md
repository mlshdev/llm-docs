> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/observation/observationregistrar/didset(_:keypath:)

# didSet(\_:keyPath:)

**Framework:** Observation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A property observation called after setting the value of the subject.

## Declaration

```swift
func didSet<Subject, Member>(_ subject: Subject, keyPath: KeyPath<Subject, Member>) where Subject : Observable
```

## Parameters

- `subject`: An instance of an observable type.
- `keyPath`: The key path of an observed property.

## See Also

### Receiving change notifications

- [willSet(\_:keyPath:)](willset%28__keypath_%29.md): A property observation called before setting the value of the subject.
