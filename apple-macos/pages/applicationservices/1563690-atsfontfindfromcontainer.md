> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563690-atsfontfindfromcontainer](https://developer.apple.com/documentation/applicationservices/1563690-atsfontfindfromcontainer)

# ATSFontFindFromContainer(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontFindFromContainer(_ iContainer: ATSFontContainerRef, _ iOptions: ATSOptionFlags, _ iCount: Int, _ ioArray: UnsafeMutablePointer<ATSFontRef>!, _ oCount: UnsafeMutablePointer<Int>!) -> OSStatus
```

# ATSFontFindFromContainer (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontFindFromContainer(ATSFontContainerRef iContainer, ATSOptionFlags iOptions, ItemCount iCount, ATSFontRef ioArray[], ItemCount *oCount);
```
