> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcloudidentifier/init(archivalstringvalue:)](https://developer.apple.com/documentation/photos/phcloudidentifier/init(archivalstringvalue:))

# init(archivalStringValue:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Archival string can be used to serialize and deserialize the PHCloudIdentifier (Note the archival format is compatible with strings archived via the deprecated API `stringValue`)

## Declaration

```swift
init?(archivalStringValue archivalString: String)
```

# initWithArchivalStringValue: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Archival string can be used to serialize and deserialize the PHCloudIdentifier (Note the archival format is compatible with strings archived via the deprecated API `stringValue`)

## Declaration

```objectivec
- (instancetype) initWithArchivalStringValue:(NSString *) archivalString;
```
