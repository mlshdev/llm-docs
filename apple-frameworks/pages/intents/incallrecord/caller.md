> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/incallrecord/caller

# caller (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.5) · iPadOS 11.0+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 7.3)

The person who participated in the call with the current user.

## Declaration

```swift
@NSCopying var caller: INPerson? { get }
```

# caller (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.5) · iPadOS 11.0+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS 12.0+ (deprecated in 12.0) · tvOS 11.0+ (deprecated in 14.5) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 7.3)

The person who participated in the call with the current user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * caller;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * caller;
```
