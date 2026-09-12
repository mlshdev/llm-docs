> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/getobjectvalue(_:for:errordescription:)](https://developer.apple.com/documentation/foundation/datecomponentsformatter/getobjectvalue(_:for:errordescription:))

# getObjectValue(\_:for:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSDateComponentsFormatter` currently only implements formatting, not parsing. Until it implements parsing, this will always return `NO`.

## Declaration

```swift
func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

# getObjectValue:forString:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSDateComponentsFormatter` currently only implements formatting, not parsing. Until it implements parsing, this will always return `NO`.

## Declaration

```objectivec
- (BOOL) getObjectValue:(id*) obj forString:(NSString *) string errorDescription:(NSString **) error;
```
