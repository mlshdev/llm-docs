> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/atsfontquerycallback](https://developer.apple.com/documentation/applicationservices/atsfontquerycallback)

# ATSFontQueryCallback (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```swift
typealias ATSFontQueryCallback = (ATSFontQueryMessageID, CFPropertyList?, UnsafeMutableRawPointer?) -> Unmanaged<CFPropertyList>?
```

# ATSFontQueryCallback (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
typedef CFPropertyListRef (*ATSFontQueryCallback)(ATSFontQueryMessageID msgid, CFPropertyListRef data, void *refCon);
```
