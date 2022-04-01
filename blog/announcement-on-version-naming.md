---
title: Announcement on version naming
authors: piercebrands
tags: [Version]
---

At the beginning, the naming method of the version number was: `a.b.c`.

| Version number | Description |
|:-------------|:---------|
| a | major version |
| b | minor version |
| c | revision |


Later, due to **Platform API compatibility** (because I still want to support the old version), the version name was changed to 
correspond to the version of the IDE (only, major and minor versions).



:::success E.g.
Plugin version `2020.1` version indicates support for IDE `2020.1.*`
Plugin version `2020.2` version indicates support for IDE `2020.2.*`
...
:::


Regarding revisions: Revisions are controlled by ExcelReader's own updates, 
and have nothing 
to do with the IDE's version.

:::success E.g.
ExcelReader `2021.3.2` has nothing to do with IDE `2021.3.2`. 
All that matters is major version `2021` and minor version `3`.
:::
