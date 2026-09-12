> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxunknownsubrole](https://developer.apple.com/documentation/applicationservices/kaxunknownsubrole)

# kAXUnknownSubrole (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXUnknownSubrole: String { get }
```

<a id="discussion"></a>

## Discussion

A subrole for an unknown type of window. A window should include a subrole to further define its type. If your window does not conform to an existing subrole, you can use the unknown subrole. Alternatively, you can return the `eventNotHandledErr` error when your window is asked for its subrole.

# kAXUnknownSubrole (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXUnknownSubrole
```

<a id="discussion"></a>

## Discussion

A subrole for an unknown type of window. A window should include a subrole to further define its type. If your window does not conform to an existing subrole, you can use the unknown subrole. Alternatively, you can return the `eventNotHandledErr` error when your window is asked for its subrole.
