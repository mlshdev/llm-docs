> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommandwithrequiredresponse/commandfields](https://developer.apple.com/documentation/matter/mtrcommandwithrequiredresponse/commandfields)

# commandFields (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The command fields to pass for the command invoke.  nil if this command does not have any fields.  If not nil, this should be a data-value dictionary of MTRStructureValueType.

## Declaration

```swift
var commandFields: [String : Any]? { get set }
```

# commandFields (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The command fields to pass for the command invoke.  nil if this command does not have any fields.  If not nil, this should be a data-value dictionary of MTRStructureValueType.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSDictionary<NSString *,id> * commandFields;
```
