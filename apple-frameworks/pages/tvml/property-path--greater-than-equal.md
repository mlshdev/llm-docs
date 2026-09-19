> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvml/property-path--greater-than-equal

# {property-path}-greater-than-equal

**Kind:** Article

Compares a value from a JSON file to a specified value to find out if the JSON value is greater than or equal to the specified value.

<a id="Overview"></a>

## Overview

The `{property-path}-greater-than-equal` query is used with data binding to determine whether one value is greater than or equal to another. Bind a value from your JSON file to a variable associated with the query. If the `property-path` is greater than or equal to the designated value, the element is processed.

For example, you want to notify a user that a movie has at least 24 hours left in the rental period. Add a `specialize` element that contains a `{property-path}-greater-than-equal` query. If the `hoursLeft` variable is greater than or equal to 24, color the title white.

```xml
<specialize state="({hoursLeft}-greater-than-equal:24)">
    <title tag="title" style="color:white"/>
</specialize>
```
