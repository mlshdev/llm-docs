> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationcalloutinfodidchangenotification](https://developer.apple.com/documentation/mapkit/mkannotationcalloutinfodidchangenotification)

# MKAnnotationCalloutInfoDidChangeNotification

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A property to observe to determine when the title or subtitle information of an annotation object changes.

> Use KVO notifications instead.

## Declaration

```objectivec
extern NSString * const MKAnnotationCalloutInfoDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification supports legacy applications and is no longer necessary. MapKit tracks changes to the title and subtitle of an annotation using KVO notifications.
