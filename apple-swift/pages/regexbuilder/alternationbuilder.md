> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/alternationbuilder](https://developer.apple.com/documentation/regexbuilder/alternationbuilder)

# AlternationBuilder

**Framework:** RegexBuilder  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A custom parameter attribute that constructs regular expression alternations from closures.

## Declaration

```swift
@resultBuilder struct AlternationBuilder
```

<a id="overview"></a>

## Overview

When you use a `ChoiceOf` initializer, the initializer’s closure parameter has an `AlternationBuilder` attribute, allowing you to provide multiple regular expression statements as alternatives.

## Topics

### Type Methods

- [buildExpression(\_:)](alternationbuilder/buildexpression%28__%29.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-1jq94.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-1oadq.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-1vk92.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-20ao.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-28nze.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-2afed.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-2q3in.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-2yatq.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-30m9e.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3571v.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-38zc3.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-39yml.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3a1qj.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3ascd.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3b47j.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3eldc.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3ibe4.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3nzbh.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3rkqj.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-3wkc9.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-42jgz.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-46i6m.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-4jwp3.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-4nz0t.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-4q1xd.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-53xav.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-576fa.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-57987.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-5afat.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-5fcrr.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-5me97.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-5qva.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-5wwt0.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6074o.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-653ta.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6842g.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6anqe.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6hkv5.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6nfpu.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6pfu4.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6tz5g.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6vjm9.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6vp0.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6x6gg.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-6yu9n.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-70usl.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-71zj2.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-7ihw4.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-7jsg7.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-815py.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-8a7vx.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-8dd0v.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-8e0ap.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-8pz3c.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-90yht.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-9f39x.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-9g62e.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-9k7s0.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-9op0h.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-9s1co.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-b6ks.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-klfl.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-o7ny.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-q4oo.md)
- [buildPartialBlock(accumulated:next:)](alternationbuilder/buildpartialblock%28accumulated_next_%29-toh7.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-1kh7h.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-271vl.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-3f6z3.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-520tx.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-5qbok.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-63ah5.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-6mjz0.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-6vt65.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-7jdle.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-c2a6.md)
- [buildPartialBlock(first:)](alternationbuilder/buildpartialblock%28first_%29-uy7q.md)

## See Also

### Builders

- [RegexComponentBuilder](regexcomponentbuilder.md): A custom parameter attribute that constructs regular expressions from closures.
