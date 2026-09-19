> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/fetchrequest

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The specified fetch request, when retrieving history.

## Declaration

```swift
var fetchRequest: NSFetchRequest<any NSFetchRequestResult>? { get set }
```

## See Also

### Configuring the Request

- [resultType](resulttype.md): The type of result that this request returns.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The specified fetch request, when retrieving history.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSFetchRequest * fetchRequest;
```

## See Also

### Configuring the Request

- [resultType](resulttype.md): The type of result that this request returns.
