> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplayobserver](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplayobserver)

# VZGraphicsDisplayObserver (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol you implement to observe state changes in graphic displays.

## Declaration

```swift
protocol VZGraphicsDisplayObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the methods in this protocol to observe and react to display reconfiguration.

## Topics

### Reacting to changes in display configuration

- [displayDidBeginReconfiguration(\_:)](vzgraphicsdisplayobserver/displaydidbeginreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation has begun.
- [displayDidEndReconfiguration(\_:)](vzgraphicsdisplayobserver/displaydidendreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation ends.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing changes to the display configuration

- [addObserver(\_:)](vzgraphicsdisplay/addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [removeObserver(\_:)](vzgraphicsdisplay/removeobserver%28__%29.md): Removes a display configuration change observer.

# VZGraphicsDisplayObserver (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol you implement to observe state changes in graphic displays.

## Declaration

```objectivec
@protocol VZGraphicsDisplayObserver <NSObject>
```

<a id="overview"></a>

## Overview

Implement the methods in this protocol to observe and react to display reconfiguration.

## Topics

### Reacting to changes in display configuration

- [displayDidBeginReconfiguration:](vzgraphicsdisplayobserver/displaydidbeginreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation has begun.
- [displayDidEndReconfiguration:](vzgraphicsdisplayobserver/displaydidendreconfiguration%28__%29.md): The method the framework calls when the reconfiguration operation ends.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing changes to the display configuration

- [addObserver:](vzgraphicsdisplay/addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [removeObserver:](vzgraphicsdisplay/removeobserver%28__%29.md): Removes a display configuration change observer.
