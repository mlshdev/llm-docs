> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459977-iconreftoiconfamily

# IconRefToIconFamily(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IconRefToIconFamily(_ theIconRef: IconRef!, _ whichIcons: IconSelectorValue, _ iconFamily: UnsafeMutablePointer<IconFamilyHandle?>!) -> OSErr
```

# IconRefToIconFamily (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSErr IconRefToIconFamily(IconRef theIconRef, IconSelectorValue whichIcons, IconFamilyHandle *iconFamily);
```
