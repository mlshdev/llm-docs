> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.suggested-actions

# Suggested Actions

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A Boolean value that indicates whether a messaging app displays suggested actions for a message.

## Details

`com.apple.developer.suggested-actions`

<a id="discussion"></a>

## Discussion

A Boolean value that indicates whether a messaging app displays suggested actions for a message.

<a id="Overview"></a>

## Overview

Add this entitlement to your app and use the [Suggested Actions](../../suggestedactions.md) framework to add a view to your messaging app that suggests actions, based on the content of a message. For example, a person might receive a message with an invite to an event, and your app can automatically display a suggested action for adding the event in Calendar.
